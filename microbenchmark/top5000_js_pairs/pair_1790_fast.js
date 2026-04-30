const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_5) {
          this.VAR_2 = VAR_5;
        }
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          alert("bark");
        };
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1.push(new FUNCTION_1("fido"));
        }
    }
};