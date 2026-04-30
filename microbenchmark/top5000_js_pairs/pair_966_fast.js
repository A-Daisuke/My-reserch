const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1
            .toUpperCase()
            .split("")
            .map(function (VAR_2, VAR_3, VAR_4) {
              if (!this[VAR_2]) {
                this[VAR_2] = "(";
                while (++VAR_3 < VAR_4.length) {
                  if (VAR_4[VAR_3] == VAR_2) {
                    this[VAR_2] = ")";
                    break;
                  }
                }
              }
              return this[VAR_2];
            }, {})
            .join("");
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          FUNCTION_1("aaaaaaaassssssssaaaaaaassssssssaaaaaaaaasssssss");
        }
    }
};