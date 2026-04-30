const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return VAR_1 ? this + this.FUNCTION_1(--VAR_1) : "";
        };
        "123".FUNCTION_1(1000);
    }
};