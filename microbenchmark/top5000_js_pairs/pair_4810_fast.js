const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = VAR_1.match(/(\{([^{}]+)\})/gim);
          return VAR_2;
        }
        var VAR_5 =
          "my name is {name}, I am {age} years old, and my contact email is {email}, please feel free to contact me.";
        FUNCTION_1(VAR_5);
    }
};