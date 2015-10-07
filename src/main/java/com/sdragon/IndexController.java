package com.sdragon;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value = {"/","/index"})
public class IndexController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(Model model,@RequestParam(value = "flag",required = false)String flag) {
        String resMsg = "";
//        if (null != flag && !"".equals(flag)) {
//            resMsg=flag;
//        }
        model.addAttribute("message", resMsg);
        return "index";
    }
}