const Benchmark = {
    run: function() {
        VAR_1 = (function (VAR_2) {
          var VAR_3 = "";
          for (c in VAR_2) {
            VAR_3 +=
              VAR_2[c] === "@" ? " [at] " : VAR_2[c] === "." ? " [dot] " : VAR_2[c];
          }
          return VAR_3;
        })("jean@claudeVanDamme.de");
    }
};