const Benchmark = {
    run: function() {
        VAR_1 = [];
        VAR_2 = ["Matt", "Tom", "Lucy", "Sally"];
        function FUNCTION_1(VAR_3, VAR_4, VAR_5) {
          this.VAR_6 = VAR_3;
          this.VAR_7 = VAR_4;
          this.VAR_8 = VAR_5;
          this.VAR_9 = null;
        }
        var VAR_10;
        for (var VAR_11 = 0; VAR_11 < 100; VAR_11++) {
          VAR_10 = new FUNCTION_1(VAR_2[VAR_11 % VAR_2.length], VAR_11, 20 + (VAR_11 % 10));
          VAR_1.push(VAR_10);
          if (VAR_11 > 0) {
            VAR_10["previous"] = VAR_1[VAR_11 - 1];
          }
        }
    }
};