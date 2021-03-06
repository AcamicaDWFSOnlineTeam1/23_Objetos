Crea una rama de main, el nombre de su rama debe tener la siguiente estructura:
pro_nombre_apellidoPaterno_appelidoMaterno
ejemplo: pro_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:  
nombre_apellidoPaterno_appelidoMaterno  
ejemplo: angel_perez_perez  

Dentro de este directorio cargar el o los archivos de la solución al challengue.

Ejemplo de comandos de git en consola
```
cd 21_Ciclos_Estructura_Pseudocodigo_diagramas_flujo
git checkout main
git checkout -b pro_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Solución challenge"
git push origin pro_ange_perez_perez
```

Una vez agregada la solución a su branch lo que sigue es crear un **pull request (PR)**, para ello
realizamos los siguientes pasos:

- Actualizar su rama de trabajo con los ultimos cambios de main (antes master)
```
git checkout main
git pull origin main
git checkout pro_ange_perez_perez
git merge main
```

- En la pagína de su branch hacemos clic en el texto **pull request** 
![imagen](https://user-images.githubusercontent.com/16826246/109855157-91fb6680-7c1d-11eb-9b9e-88c387afeec4.png)

- Capturar la información requerida
![imagen](https://user-images.githubusercontent.com/16826246/109855968-8eb4aa80-7c1e-11eb-969a-f05cae892423.png)

donde:
1. La rama (**branch**) a la cual se unificaran (**merge**) los cambios de su rama
2. Su rama en la que estan trabajando
3. Las personas que revisaran su código (**reviewers**), aquí agregan mi usuario **cyberhavok** y si gustan agregar
  a otras personas adelante.
4. Título del PR
5. Comentarios relacionados con el PR
6. Finalmente crean el pull request (**Create pull request**)

# Programan

## 1.- Adopción de mascotas
Una perrera municipal tiene cientos de perros para dar en adopción.
El primer paso es realizar un análisis de las características que pueden tener los perros.

## 2.- Clase
Crea una clase que contenga las características de tu análisis.
Si tu analisis no contempló el estado de adopción, añade esta propiedad en tu clase:
- En adopción
- Proceso de adopción
- Adoptado

Crea 2 métodos en tu clase:
- Modificar el estado de la adopción
- Informar el estado de la adopción

## 3.- Objeto
Crea tus primeros objetos a partir de tu clase.
Verifica el correcto funcionamiento de los 2 métodos para manipular el proceso de adopción.

## 4.- Almacenamiento
Solicita al usuario las propiedades que hayas definido en tu análisis a través un prompt.
Una vez que completó todos los datos, crea un objeto desde tu clase 'perros'.
Almacena este nuevo objeto en un array. Cada posición del array contendrá un objeto.
Al finalizar el proceso mediante window.confirm, pregunta al usuario si desea cargar otro perro.

## 5.- Visualización
Genera estos 4 reportes en un console.log:
- Todos los perros
- Todos los perros en adopción
- Todos los perros en proceso de adopción
- Todos los perros adoptados
