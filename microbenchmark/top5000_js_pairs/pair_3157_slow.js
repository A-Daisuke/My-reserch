const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return encodeURIComponent((VAR_1 + "").toString()).replace(
            /[!'\(\)\*]/g,
            function (VAR_2) {
              return "%" + VAR_2.charCodeAt(0).toString(16).toUpperCase();
            },
          );
        }
        function FUNCTION_2(VAR_3, VAR_4, VAR_5) {
          while (VAR_5--) {
            VAR_3(VAR_4);
          }
        }
        FUNCTION_2(FUNCTION_1, "!'()*", 100);
    }
};