<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FormTable;
use Storage;
use Validator;
use Illuminate\Foundation\Validation\ValidatesRequests;
use DB;


class PostController extends Controller
{
    public function __construct()
    {
    	$this->middleware('auth');
    }

    public function index() {
        $formTable = FormTable::all();
    	return view('admin.dashboard', [
    		'formTable' => $formTable,
    	]);
    }

    public function detail(FormTable $formTable)
    {
    	return view('admin.detail', [
    		'formTable' => $formTable,
    	]);
    }

    public function delete(FormTable $formTable)
    {
    	$formTable->delete();
    	return redirect()->route('admin.dash');
    }
        /**
     * Download file directly.
     *
     * @param File $file
     * @return void
     */

}
