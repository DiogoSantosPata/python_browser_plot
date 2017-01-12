import numpy as np
import socket
from time import sleep

UDP_IP = "127.0.0.1"
UDP_PORT = 5005
sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP

def sender( index, msg):
	message_string = msg
	# Normalizing the values...
	if index == 'discrepancy': message_string = np.around( (msg - msg.min())/(msg.max() - msg.min()), decimals=2)
	# Stack horizontal index and message...
	message_string = np.hstack( ( [index], message_string) )
	# Add ';' in between values so that JS can parse them later
	message_string = ";".join( message_string.astype(str)  )
	# Send it!
	sock.sendto(message_string, (UDP_IP, UDP_PORT))

def main():	

	ll = ['wd1', 'wd2', 'wd3', 'wd4']

	counter = 0
	while True:  # whatever you are gonna do

		sleep(.05)
		# Prepare the array format in sender function
		sender( 'drives', np.array([ np.sin(counter)*.05+.7, np.sin(counter)*.05+.3, np.sin(counter)*.05+.1 ])  )
		sender( 'discrepancy', np.random.uniform(0,1,4)  )
		sender( 'ltm', np.random.uniform(0,1,9)  )
		sender( 'prototypes', np.random.uniform(0,1,16)  )
		sender( 'weights', np.random.uniform(0,1,25)  )

		sender( 'text_change', ll[np.random.randint(0,4)]  )

		counter += 1

main()
