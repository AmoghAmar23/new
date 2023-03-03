#include <iostream>
#include <string>


using namespace std; 
int main(){
	const double TAX_RATE = 0.08; //The tax rate is 8% on all purchases except groceries
	const double SENIOR_DISCOUNT = 0.05; //The store offers a 5% discount to seniors 60 and over. 
	int choice;
	double price;
	double tax;
	double discount;
	double total;
	int age;
	cout<<"What would you like to buy?\n";
	cout<<"1. Bread\n";
	cout<<"2. Milk\n";
	cout<<"3. Soap\n";
	cout<<"Please enter your choice: ";
	cin>>choice;
	if(choice>=1 && choice<=3){	
		cout<<"Please enter the price $";
		cin>>price;
		cout<<"Please enter your age: ";
		cin>>age;
		tax=0;
		if(choice>=1 && choice<=2){	
			tax=TAX_RATE*price;
		}
		cout<<"\n\t\tInvoice\n";
		cout<<"Price: $"<<price<<"\n";
		cout<<"Tax: $"<<tax<<"\n";
		discount=0;
		if(age>=60){
			discount=SENIOR_DISCOUNT*price;
			cout<<"Discount: $"<<discount<<"\n";
		}
		total=price+tax-discount;
		cout<<"Total: $"<<total<<"\n";
	}else{
		cout<<"\nInvalid choice of the menu item.\n\n";
	}


	system("pause");
	return 0;
}