const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/);
        }
        var VAR_5 = 100;
        while (VAR_5--) {
          FUNCTION_1("1.1.1.1");
        }
    }
};