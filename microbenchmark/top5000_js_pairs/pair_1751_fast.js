const Benchmark = {
    run: function() {
        Array.prototype.FUNCTION_4 = function (VAR_13) {
          const VAR_14 = [];
          if (this.length < 2 || this[0] > this[1]) return VAR_14;
          for (let VAR_15 = this[0]; VAR_15 < this[1]; VAR_15++) {
            VAR_14.push(VAR_13 ? VAR_13(VAR_15) : VAR_15);
          }
          return VAR_14;
        };
        const VAR_16 = [0, 5000];
        VAR_16.FUNCTION_4();
    }
};