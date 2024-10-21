<?php
namespace App\Helpers;

use App\Models\Video;
use App\Models\ContentActivity;
use App\Models\ContentHistory;

class ContentMonitor
{

    /**
     * Record user activity
     * 
     * @param string $content
     * @return void
     */
    public static function recordHistory($tags){
        $userId = auth()->id();
        $tags = array_map('trim', explode(',', $tags) ?? []);

        if(!count($tags)) return;
        $firstTwoTags = array_slice($tags, 0, 2);
        $userHistory = ContentHistory::where('user_id', $userId)->first();
    
        if(!$userHistory){
            ContentHistory::create([
                'user_id' => $userId,
                'tag_history' => array_combine($firstTwoTags, array_fill(0, count($firstTwoTags), 1)) # ['tag1' => 1, 'tag2' => 1]
            ]);

        } else {
            if(time() - strtotime($userHistory->updated_at) < 60) return;
            
            $tagHistory = $userHistory->tag_history;
            foreach($firstTwoTags as $tag){
                if(array_key_exists($tag, $tagHistory)){
                    $tagHistory[$tag] += 1;
                } else {
                    $tagHistory[$tag] = 1;
                }
            }

            $userHistory->where('user_id', $userId)->
            update([
                'tag_history' => $tagHistory
            ]);
        }
    }

    /**
     * Like or remove like from content
     * 
     * @param int $contentId
     * @param string $action : like, unlike
     * 
     * @return void
     */
    public static function likeContent($contentId, $action){
        $userId = auth()->id();
        $userActivity = ContentActivity::where('user_id', $userId)->where('content_id', $contentId)->first();

        if($userActivity) return;
        $contentType = $userActivity->content_type;

        switch($contentType){
            case 'video': if(!Video::find($contentId)) return; break;
            default:
                return;
        }
    }


    /**
     * Record current Content State
     * 
    */

    public static function recordState(){
        $userId = auth()->id();
        $data = [
            'content_id' => request()->params('content_id'),
            'content_type' => request()->params('content_type'),
            'state' => request()->params('current_state'),
        ];

        if(in_array(null, $data)) response()->json(['status' => false, 'message' => 'Invalid request']);

        $content = ContentActivity::where('user_id', $userId)
            ->where('content_id', $data['content_id'])
            ->where('content_type', $data['content_type'])
            ->first();

        if(!$content)
            response()->json(['status' => false, 'message' => 'Content not found']);

        // if type is document, state must be even number, convert
        if($data['content_type'] == 'document' && $data['state'] % 2 != 0) $data['state'] += 1;
        $content = ContentActivity::where('user_id', $userId)
            ->where('content_id', $data['content_id'])
            ->where('content_type', $data['content_type'])
            ->update([
                'resume' => $data['state']
            ]);

        if($content) response()->json(['status' => true, 'message' => 'State recorded successfully']);
    }
}