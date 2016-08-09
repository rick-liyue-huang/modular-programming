# Modular-Programming

As more and more complicated javascript program need to be run in server end, and javascript language also has not the attributes of *class* and *lib*，so how to modularize the js code to satisfy the upon needs become very important.

In this repository, I just explain the modularization development process in some extent. At the end I will put a sample of modularization code by SeaJs lib, which is applied in kind of CMD idea.

The non-modularization code easily introduced problems of the name confliction and the file dependency.

In order to solve the upon problems, people provide some solutions that is from jejune to mature. Through a sample of Calculator I will explain the development process.
  
The easiest way is to use global function, and then the name space, the IIFE, closure also provided, at last some needs also included, such as the the module extend and the third part file denpendcy. The whole process is put in the folder of *solution process*.

After analyze these upon solutions, a more common solution is introduced in folder of *Calculator Demo By SeaJS*, the SeaJS lib, one application of CMD - Common Module Definition idea. Although this idea is out of date in some extent, it is very useful for us to understand node.js, and also a sample of canvas animation *CrazyBird* shown how to use the SeaJS.






 