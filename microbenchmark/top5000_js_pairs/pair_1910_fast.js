const Benchmark = {
    run: function() {
        Array.prototype.FUNCTION_2 = function (VAR_6) {
          const VAR_7 = [];
          if (this.length < 2 || this[0] > this[1]) return VAR_7;
          for (let VAR_8 = this[0]; VAR_8 < this[1]; VAR_8++) {
            VAR_7.push(VAR_6 ? VAR_6(VAR_8) : VAR_8);
          }
          return VAR_7;
        };
        const VAR_9 = [0, 5000];
        VAR_9.FUNCTION_2();
    }
};