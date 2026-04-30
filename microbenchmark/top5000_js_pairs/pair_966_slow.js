const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1
            .toLowerCase()
            .split("")
            .map(function (VAR_2, VAR_3, VAR_4) {
              return VAR_3 == VAR_4.lastIndexOf(VAR_2) ? "(" : ")";
            })
            .join("");
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          FUNCTION_1("aaaaaaaassssssssaaaaaaassssssssaaaaaaaaasssssss");
        }
    }
};