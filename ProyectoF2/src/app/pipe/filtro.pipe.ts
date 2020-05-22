import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    const resultPost = [];
    for(const post of value){
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }else if(post.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }else if(post.documento.indexOf(arg) > -1){
        resultPost.push(post);
      }else if(post.carrera.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }else if(post.correo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }    
    }
    return resultPost;
  }
}
