// Immediate invoked function expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a common design pattern used to create a private scope for variables and functions, preventing them from polluting the global namespace.
(function(){
    console.log("This is an  1 IIFE example");
})();


(()=>{ console.log("This is an  2 IIFE example");
})();
