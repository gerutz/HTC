<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    // nombre de la tabla

    protected  $table = 'videos';

    // definimos las variables que se van a poder autocompletar

    protected $fillable = array('titulo','youtube_id','video_url','video_img_id','video_img_label');

    protected  $hidden = ['created_at','updated_at'];

    public function pregunta(){

        return $this->belongsTo('App\Pregunta');
    }
}
