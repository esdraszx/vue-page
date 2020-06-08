<template>
	<div class="mainContent">
		<form class="form" method="post" action="">
			<label for="fullName">Full Name</label><input type="text" name="fullName" required><br/>
			<label for="subject">Subject</label><input type="text" name="subject" required><br/>
			<label for="fromEmail">From</label><input type="email" name="fromEmail" placeholder="Email Address" required><br/>
			<label for="message">Message</label><br/><textarea type="textarea" name="message" cols="60" rows="10"></textarea>
		</form>
		<!-- MODALLL -->
		<!-- <div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Mobile Phone</h4>
					</div>
					<div class="modal-body">
						<p>(801)-801-8011</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<style>
	
	.icon {
		width: 100px;
	}

	form {
		border: 1px solid red;
		width: 70%;
		margin-left: 15%;
		text-align: left;
	}

	.mainContent {
		height: 100%;
	}

	@media only screen and (max-width: 800px){
		.mainContent {
				height: 900px;
		}   
	}
</style>