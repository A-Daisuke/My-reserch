const Benchmark = {
    run: function() {
        var VAR_1 = "Alma";
        String.prototype.FUNCTION_1 = function (VAR_2, VAR_3) {
          return --VAR_2 ? this + (VAR_3 || "") + this.FUNCTION_1(VAR_2, VAR_3) : "" + this;
        };
        VAR_1.FUNCTION_1(1000);
    }
};