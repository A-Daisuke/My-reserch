const Benchmark = {
    run: function() {
        const VAR_1 = "google.com";
        function FUNCTION_1(VAR_2) {
          let VAR_4 = new URL("http://google.com");
          if (VAR_1.includes("http:")) {
            return VAR_1.replace("http:", "https:");
          } else if (VAR_1.includes("https:")) {
            return VAR_1;
          } else {
            return `https://${VAR_1}`;
          }
        }
        FUNCTION_1(VAR_1);
    }
};