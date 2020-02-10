<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'perusahaan' => 'required|string',
            'email' => 'required|string',
            'telp' => 'required|string',
            'pertanyaan' => 'required|string',
            
        ];
    }
        /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
}
