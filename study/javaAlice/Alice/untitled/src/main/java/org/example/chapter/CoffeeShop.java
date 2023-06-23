package org.example.chapter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class CoffeeShop {
    public static void main(String[] args) {

        Customer customerA = new Customer();
        Clerk clerk = new Clerk();
        Menu menu = new Menu();
        customerA.order("LATTE", 4, menu, clerk);
    }
}

/**
 * 손님
 */
class Customer {
    public void order(String menuName,
                      int quantity,
                      Menu menu,
                      Clerk clerk) {

        MenuItem orderList = menu.choose(menuName);
        int receipt = (int) clerk.takeOrder(orderList, quantity).get("receipt");

        System.out.println("내야할 금액 : " + receipt);
    }
}

/**
 * 종업원
 */
class Clerk {

    public Map<String, Object> takeOrder(MenuItem orderList, int quantity) {
        Barister barister = new Barister();

        int receipt = bill(orderList.getPrice(), quantity);

        System.out.println("takeOrder : " + orderList.name() + ", quantity : " + quantity);
        System.out.println("receipt : " + receipt);
        List<Beverage> beverages = barister.makeSomething(orderList.name(), quantity);

        Map<String, Object> packaging = new HashMap<>();
        packaging.put("receipt", receipt);
        packaging.put("beverages", beverages);

        return packaging;
    }

    public int bill(int price, int quantity) {
        return price * quantity;
    }
}

/**
 * 바리스타
 */
class Barister {
    public List<Beverage> makeSomething(String menuName, int quantity) {
        System.out.println("barister start making");
        Beverage beverage = new Beverage(menuName);

        List<Beverage> beverages = new ArrayList<>();
        for (int i = 0; i < quantity; i++) {
            beverages.add(beverage);
        }

        return beverages;
    }
}

/**
 * 음료
 */
class Beverage {
    private String name;

    public Beverage(String menuName) {
        this.name = menuName;
    }

    public String getName() {
        return name;
    }
}

/**
 * 메뉴판
 */
class Menu {
    public MenuItem choose(String menuName) {

        for (int i = 0; i < MenuItem.values().length; i++) {
            if (menuName.equals(MenuItem.values()[i].toString())) {
                return MenuItem.values()[i];
            }
        }

        return MenuItem.COFFEE;
    }
}

/**
 * 메뉴항목
 */
enum MenuItem {
    COFFEE(4000),
    TEA(1500),
    LATTE(5000);

    private int price;

    MenuItem(int price) {
        this.price = price;
    }

    public int getPrice() {
        return this.price;
    }
}
