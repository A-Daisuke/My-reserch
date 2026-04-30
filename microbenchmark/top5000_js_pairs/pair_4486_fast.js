const Benchmark = {
    run: function() {
        var VAR_1 =
          "ttvmswxjzdgzqxotby_lslonwqaipchgqdo_yz_fqdagixyrobdjtnl_jqzpptzfcdcjjcpjjnnvopmh";
        var VAR_2 = VAR_1;
        var VAR_6 = VAR_2[0];
        for (var VAR_7 = 1; VAR_7 < VAR_2.length; VAR_7++) {
          if (VAR_2[VAR_7] == VAR_6) break;
          VAR_6 = VAR_2[VAR_7];
        }
    }
};