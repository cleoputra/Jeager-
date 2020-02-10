<?php

namespace App;

use Storage;
use Illuminate\Database\Eloquent\Model;

class FormTable extends Model
{
    protected $table = 'form_table';
    protected $guarded = ['id'];
}
