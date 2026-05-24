package com.mukja.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MenuItemController {

    private final MenuItemRepository repository;

    public MenuItemController(MenuItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/menu-items")
    public List<MenuItem> getMenuItems() {
        if (repository.count() == 0) {
            repository.save(new MenuItem(
                    "Kimbap",
                    "Korean seaweed rice rolls with vegetables.",
                    2.95,
                    "/images/gimbap.jpeg"
            ));

            repository.save(new MenuItem(
                    "Buldak Ramen",
                    "Spicy Korean ramen with rich fire chicken sauce.",
                    2.95,
                    "/images/gimbap1.jpeg"
            ));

            repository.save(new MenuItem(
                    "Cheese Dog",
                    "Korean street-style cheese corn dog.",
                    2.95,
                    "/images/gimbap2.jpeg"
            ));
        }

        return repository.findAll();
    }
}