const Benchmark = {
    run: function() {
        const VAR_1 = "google.com";
        function FUNCTION_1(VAR_2) {
          try {
            if (new URL(VAR_1).protocol.length > 0) {
              return VAR_1.replace("http:", "https:");
            }
          } catch (VAR_3) {
            return `https://${VAR_1}`;
          }
          return VAR_1;
        }
        FUNCTION_1(VAR_1);
    }
};