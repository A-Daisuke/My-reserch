const Benchmark = {
    run: function() {
        VAR_1 = (function (VAR_2) {
          return VAR_2.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] ");
        })("jean@claudeVanDamme.de");
    }
};