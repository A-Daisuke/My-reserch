const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function (VAR_1) {
          return Array.apply(null, { KEY_1: VAR_1 })
            .map(
              function (VAR_2) {
                return this.toString();
              }.bind(this),
            )
            .join("");
        };
        "123".FUNCTION_1(1000);
    }
};