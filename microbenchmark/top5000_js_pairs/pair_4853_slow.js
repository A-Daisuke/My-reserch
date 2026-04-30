const Benchmark = {
    run: function() {
        var VAR_1 = "var a = { b : 'Hello' }; a.b + ', ' + name;";
        function FUNCTION_1(VAR_2) {
          try {
            eval(VAR_1);
          } catch (VAR_3) {}
        }
        FUNCTION_1("World");
    }
};