const Benchmark = {
    run: function() {
        var VAR_1 = "1234567890";
        String.prototype.FUNCTION_1 = function () {
          var VAR_2 = this.length >> 1,
            VAR_3 = this.substring(0, VAR_2),
            VAR_4 = this.substring(VAR_2, this.length);
          return VAR_2 == 0 ? VAR_4 : this.FUNCTION_1.apply(VAR_4) + this.FUNCTION_1.apply(VAR_3);
        };
        String.prototype.FUNCTION_2 = function () {
          return this.split("").reverse().join("");
        };
        VAR_1.FUNCTION_2();
    }
};