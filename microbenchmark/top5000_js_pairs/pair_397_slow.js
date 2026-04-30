const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return {
            KEY_1: VAR_1,
            KEY_2: function () {
              var VAR_2 = this;
              console.log(VAR_2.KEY_1);
            },
          };
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
          VAR_3.push(new FUNCTION_1("foo"));
        }
    }
};