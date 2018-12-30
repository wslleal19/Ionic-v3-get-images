# Ionic-v3-get-images
Pegue imagens da câmera ou galeria do dispositivo.

## Start ##
Você precisa instalar o plugin Camera no seu projeto, após isso importe o provider na page que você irá usá-lo.


**Examples :**

```typescript
  var size = {}
  size.width = 1000;
  size.height = 750;

  this.getImage.getCamera(size).then(result=>{
      console.log(result);
  }).catch(reason=>{
      console.warn('Failed!', reason);
  });
```

**Paramêtros do método getCamera():**
- Size : Um objeto que precisa ter as propiedades **width** e **height** com valores **integer**.


```typescript
  this.getImage.getGaleria().then(result=>{
      console.log(result);
  }).catch(reason=>{
      console.warn('Failed!', reason);
  });
```
