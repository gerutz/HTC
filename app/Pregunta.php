<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
    //Nombre de tabla en MYSQL

    protected $table = 'preguntas';

    //La tabla tendra identificador id

    //Atributos que se pueden asignar de manera masiva

    protected $fillable = array('titulo', 'pregunta_url');

    protected $hidden = ['created_at', 'updated_at'];

    // Relacion Pregunta con Video

    public function video(){

        return $this->hasMany('App\Video');
    }
}
