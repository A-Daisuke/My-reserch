const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
            VAR_2.push(VAR_1[VAR_3]);
          }
          return VAR_2.join("");
        }
        var VAR_5 =
          "my name is {name}, I am {age} years old, and my contact email is {email}, please feel free to contact me.";
        FUNCTION_1(VAR_5);
    }
};