const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.KEY_1 = function () {};
        }
        function FUNCTION_2() {}
        FUNCTION_2.VAR_1 = {
          KEY_1: function () {},
        };
        var VAR_2 = [];
        var VAR_3 = [];
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          VAR_2.push(new FUNCTION_1());
          VAR_3.push(new FUNCTION_2());
          VAR_4.push(Math.random() < 0.5 ? new FUNCTION_1() : {});
        }
        for (var VAR_6 = 0; VAR_5 < VAR_3.length; VAR_5++) {
          if (VAR_3[VAR_5].KEY_1) VAR_3[VAR_5].KEY_1;
        }
    }
};