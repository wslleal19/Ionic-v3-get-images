import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';

@Injectable()
export class GetImagesProvider {

  constructor(public plt: Platform, public camera: Camera) {}

  getCamera(size = null){    
      const options: CameraOptions = {
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        quality: 100,
        targetWidth: 1000,
        targetHeight: 750,
      }

      if(size && typeof size === 'object'){
        if(size.hasOwnProperty('width') && size.hasOwnProperty('height')){
          options.targetWidth = size.width;
          options.targetHeight = size.height;
        }
      }

      this.camera.getPicture(options).then((imageData) => {

        if (this.plt.is('ios')) {
           imageData.replace(/^file:\/\//, '');
        }

        return imageData;

      }, (err) => {
         return err;
      });
  }


  getGaleria(){
        const options: CameraOptions = {
          quality: 100,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true,
        }

        this.camera.getPicture(options).then((imageData) => {
          
          var caminho = imageData.slice(0, imageData.lastIndexOf('/')+1);
          var novaImg = imageData.substr(imageData.lastIndexOf('/')+1);
          var cortaImagem = novaImg.slice(0, novaImg.indexOf('?'));
          var finalImagem = caminho+cortaImagem;

          if (this.plt.is('ios')) {
             imageData.replace(/^file:\/\//, '');
             return imageData;
          }
          else{
              return finalImagem;
          }

        }, (err) => {
         return err;
        });
  }


}
