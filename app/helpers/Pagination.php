<?php

namespace App\Helpers;

class Pagination
{
    protected $total;
    protected $perPage;
    protected $currentPage;
    protected $totalPages;
    
    public function __construct($total, $perPage = 15, $currentPage = 1)
    {
        $this->total = $total;
        $this->perPage = $perPage;
        $this->currentPage = $currentPage;
        $this->totalPages = ceil($total / $perPage);
    }
    
    public function render()
    {
        if ($this->totalPages <= 1) {
            return '';
        }
        
        $paginationHtml = '<nav aria-label="Page navigation"><ul class="pagination">';
        
        // Previous button
        if ($this->currentPage > 1) {
            $paginationHtml .= '<li class="page-item"><a class="page-link" href="?page=' . ($this->currentPage - 1) . '">Previous</a></li>';
        } else {
            $paginationHtml .= '<li class="page-item disabled"><span class="page-link">Previous</span></li>';
        }
        
        // Page numbers
        for ($page = 1; $page <= $this->totalPages; $page++) {
            if ($page == $this->currentPage) {
                $paginationHtml .= '<li class="page-item active"><span class="page-link">' . $page . '</span></li>';
            } else {
                $paginationHtml .= '<li class="page-item"><a class="page-link" href="?page=' . $page . '">' . $page . '</a></li>';
            }
        }
        
        // Next button
        if ($this->currentPage < $this->totalPages) {
            $paginationHtml .= '<li class="page-item"><a class="page-link" href="?page=' . ($this->currentPage + 1) . '">Next</a></li>';
        } else {
            $paginationHtml .= '<li class="page-item disabled"><span class="page-link">Next</span></li>';
        }
        
        $paginationHtml .= '</ul></nav>';
        
        return $paginationHtml;
    }
}