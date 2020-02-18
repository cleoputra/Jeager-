<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FormsRequest;
use App\FormTable;
use Storage;
use Validator;
use Illuminate\Foundation\Validation\ValidatesRequests;
use DB;


class FormController extends Controller
{
    public function submit(FormsRequest $request){
        
        $formTable = FormTable::create([
            'perusahaan' => $request->input('perusahaan'),
            'email' => $request->input('email'),
            'telp' => $request->input('telp'),
            'pertanyaan' => $request->input('pertanyaan'),
           ]);

           return back()->with('success_message', 'Berhasil submit!');
    }
}
