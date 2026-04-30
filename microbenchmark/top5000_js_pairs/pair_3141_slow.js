const Benchmark = {
    run: function() {
        Array.prototype.FUNCTION_1 = function (VAR_1, VAR_2) {
          var VAR_3 = this.indexOf(VAR_1),
            VAR_4 = VAR_3 + (VAR_2 || 1);
          if (VAR_3 === -1) throw new Error("Element not found in array");
          if (VAR_4 >= this.length) VAR_4 = this.length;
          this.splice(VAR_3, 1);
          this.splice(VAR_4, 0, VAR_1);
        };
        var VAR_5 = [];
        for (var VAR_6 = 1; VAR_6 <= 10000; VAR_6++) {
          VAR_5.push({
            KEY_1: VAR_6,
            KEY_2: "Item " + VAR_6,
          });
        }
        VAR_5.FUNCTION_1(VAR_5[1]);
    }
};