const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_2) {
          this.VAR_3 = VAR_2;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          alert("bark");
        };
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1.push(new FUNCTION_1("fido"));
        }
    }
};