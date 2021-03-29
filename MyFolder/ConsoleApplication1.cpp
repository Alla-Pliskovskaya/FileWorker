// ConsoleApplication1.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"


int main()
{
    return 0;
}

class Data
{
	const int C = 1048576;
	char* buff;
    Data* next; 
	Data* head;
	int current_length;

	public:
		Data() 
		{
			buff = new char[C];
			current_length = 0;
			head = NULL;
		}

		void allocate_memory(char* word)
		{
			this->next = new Data();
			current_length = C;
			for (int i = 0; i < sizeof(word); i++)
			{
				this->next->buff[current_length] = word[i];
				this->next->current_length++;
			}
		}

		void add_word(char* word)
		{
			if (current_length + sizeof(word) > C)
			{
				allocate_memory();
			}
			for (int i = 0; i < sizeof(word); i++)
			{
				buff[current_length] = word[i];
				current_length++;
			}

		}
};
