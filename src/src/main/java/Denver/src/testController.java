package Denver.src;

// import org.springframework.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
    //@GetMapping("/api/test")
    public String test() {
        return "Yay, I work!";
    }
}