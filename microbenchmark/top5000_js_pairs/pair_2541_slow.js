const Benchmark = {
    run: function() {
        Array.prototype.FUNCTION_1 = function (VAR_1) {
          let VAR_2 = this.length;
          while (VAR_2--) {
            if (VAR_1(this[VAR_2], VAR_2)) {
              this.splice(VAR_2, 1);
            }
          }
        };
        let VAR_3 = [...Array(1000).keys()];
        VAR_3.FUNCTION_1(function (VAR_4) {
          return VAR_4 > 3;
        });
    }
};