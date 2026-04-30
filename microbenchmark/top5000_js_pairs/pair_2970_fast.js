const Benchmark = {
    run: function() {
        Array.prototype.FUNCTION_2 = function (VAR_7) {
          const VAR_8 = [];
          if (this.length < 2 || this[0] > this[1]) return VAR_8;
          for (let VAR_9 = this[0]; VAR_9 < this[1]; VAR_9++) {
            VAR_8.push(VAR_7 ? VAR_7(VAR_9) : VAR_9);
          }
          return VAR_8;
        };
        const VAR_10 = [0, 5000];
        VAR_10.FUNCTION_2();
    }
};