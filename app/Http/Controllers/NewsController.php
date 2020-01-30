<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;

class NewsController extends Controller
{
  public function getCURL()
  {
    $response = Curl::to('http://still-forest-02953.herokuapp.com')->get();

    return view('page.news', [
      'news' => json_decode($response)->data,
    ]);
  }
}
