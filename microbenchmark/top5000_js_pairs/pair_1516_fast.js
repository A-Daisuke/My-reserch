const Benchmark = {
    run: function() {
        var VAR_4 = Function.prototype.bind.bind(Function.prototype.call);
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {
          var VAR_3 = +this;
        }
        VAR_1.forEach(VAR_4(FUNCTION_1));
    }
};