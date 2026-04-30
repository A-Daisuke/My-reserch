const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = {
            KEY_1: "C",
            KEY_2: "G",
            KEY_3: "T",
            KEY_4: "A",
          };
          return Array.prototype.map.call(VAR_1, function (VAR_3) {
            return this.VAR_2[VAR_3];
          });
        }
        FUNCTION_1(
          "CTAATGTGTGTGATTACACTGTGATTACACATAGGCTCATCATGAATAGGTGTGATTACACATAGGCTCATCATGACTCATCATGAATTTGTGATTACACATAGGCTCATCATGAACACATAGGCTCATCATGA",
        );
    }
};