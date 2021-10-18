<?php
use Snipworks\Smtp\Email;
use Ddeboer\Imap\Server;

class MailClient{
    //authenticate with the Imap server
    public static function auth(){
		$server = new Server($_ENV['IMAP_HOST']);
		$connection = $server->authenticate($_ENV['IMAP_USER'], $_ENV['IMAP_PASS']);
		return $connection;
	}
    
    // fetch emails
    public static function pipe($box = 'INBOX'){
        $connection = MailClient::auth();
		$mailbox = $connection->getMailbox($box);
		$messages = $mailbox->getMessages();
		$no = 0;

		foreach($messages as $message){
			$mail[$no]['date'] = $message->getHeaders()->get('date');
			$mail[$no]['subject'] = $message->getHeaders()->get('subject');
			$mail[$no]['ccaddress'] = $message->getHeaders()->get('ccaddress');
			$from = $message->getHeaders()->get('sender');
			$from = (array) $from['0'];
			$mail[$no]['from_name'] = $from['personal'];
			$mail[$no]['from_email'] = $from['mailbox'] .'@'. $from['host'];
			$mail[$no]['text'] = $message->getBodyText();
			$mail[$no]['html'] = $message->getBodyHtml();
			$no++;
		}

		return $mail;    
    }


    // this function sends out emails
    public static function send($receiver, $subject, $message){
        $mail = new Email($_ENV['SMTP_HOST'], $_ENV['SMTP_PORT']);
        if($_ENV['SMTP_PORT']==587){
            $mail->setProtocol(Email::TLS);
        }
        $mail->setLogin($_ENV['SMTP_USER'], $_ENV['SMTP_PASS']);
        $mail->addTo($receiver, '');
        $mail->setFrom($_ENV['SMTP_MAIL'], $_ENV['SMTP_NAME']);
        $mail->setSubject($subject);
        $mail->setHtmlMessage($message);

        if($mail->send()){
            setcookie('notice', 'df_mail_200', time() + (180), "/");
            echo 'success';
        } else {
            setcookie('notice', 'df_mail_201', time() + (180), "/");
            echo 'fail';
        }
    }
}
?>