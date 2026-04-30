const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = this;
          this.VAR_5 = VAR_1;
          this.FUNCTION_2 = function () {
            console.log(VAR_2.VAR_5);
          };
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
          VAR_3.push(new FUNCTION_1("foo"));
        }
    }
};