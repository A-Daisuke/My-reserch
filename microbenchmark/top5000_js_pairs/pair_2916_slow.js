const Benchmark = {
    run: function() {
        Array.prototype.FUNCTION_1 = function (VAR_1) {
          const VAR_2 = [];
          if (this.length < 2 || this[0] > this[1]) return VAR_2;
          for (let VAR_3 = this[0]; VAR_3 < this[1]; VAR_3++) {
            VAR_2.push(VAR_1 ? VAR_1(VAR_3) : VAR_3);
          }
          return VAR_2;
        };
        const VAR_4 = [0, 5000];
        VAR_4.FUNCTION_1((VAR_5) => VAR_5 * 2);
    }
};